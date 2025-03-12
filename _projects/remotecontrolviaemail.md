---
layout: page
title: Remote Control Via Email
description: (CSC10008) DHCP
img: assets/img/projects/remotecontrolviaemail/client-main.png
importance: 1
category: semester project
giscus_comments: true
related_publications: false
---

## Introduction

In today's increasingly connected world, the ability to remotely manage systems securely is more important than ever. While there are many remote administration tools available, many require direct network connections that can be blocked by firewalls or NAT configurations.

Our project, **RemoteControl Via Email**, addresses this challenge by leveraging email communication as a transport medium for remote control commands. This approach allows administrators to manage systems from anywhere, bypassing traditional network restrictions.

This project was developed as part of the Computer Networks course at Ho Chi Minh City University of Science (HCMUS) by a team of three students:

- **Mai Đức Minh Huy** (23122008) - Team Lead, server socket programming, reporting
- **Nguyễn Thiên Ấn** (23122020) - Gmail API integration, component integration, testing
- **Nguyễn Lê Hoàng Trung** (23122004) - GUI client design, video demo, documentation

[Report featured in the project](https://drive.google.com/file/d/1JLrnlqJ0fPrAmBOoKK0lqJl34vVrsOhC/view?usp=sharing)

## Architecture

The system consists of three main components working together:

1. **Remote User**: The person who wants to control the target computer remotely by sending command emails

2. **Client Application**: A wxWidgets-based GUI intermediary that:
   - Connects to remote machines by their IP addresses
   - Authenticates using Gmail credentials with app passwords
   - Periodically checks for new command emails 
   - Parses email content into commands for the server
   - Sends command results back via email
   - Provides a visual interface for direct control

3. **Server Application**: A C++ background service running on the target machine that:
   - Listens for incoming connections using socket programming
   - Responds to discovery requests on a LAN
   - Executes system commands with appropriate permissions
   - Captures screen and webcam content
   - Manages processes, services, and the file system
   - Returns detailed results to the client

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/remotecontrolviaemail/rcve-architecture.png" class="img-fluid rounded z-depth-1" zoomable=true alt="System Architecture" %}
    </div>
</div>
<div class="caption">
    High-level architecture of the RemoteControl Via Email system
</div>

## Key Features

### Security-First Design

- SSL-encrypted connections using OpenSSL
- Gmail authentication with app password support for enhanced security
- Local network discovery with authentication checks
- Secure command transmission over sockets

### Comprehensive System Management

- Process management: listing all running processes categorized by type (Apps, Background, Windows)
- Service control: listing, starting, and stopping Windows services with status monitoring
- File system operations: disk enumeration, directory scanning, file retrieval and deletion
- Screen capture functionality with image transmission
- Webcam access, control and capture capabilities
- Power management (shutdown, restart, sleep) with configurable options

### Resilient Communication

- Email-based command and response system that works across network boundaries
- Structured request-response protocol with defined command format
- Automatic discovery of compatible servers on the local network via UDP broadcasting
- Support for attachments (images, file content) in responses
- Custom error handling and recovery mechanisms

## Technical Implementation

The project leverages several technologies and libraries:

- **wxWidgets**: For the cross-platform GUI components including custom buttons, file explorer, and process/service managers
- **libcurl**: For handling email communication via IMAP/SMTP protocols with Gmail
- **OpenSSL**: For secure SSL/TLS communication and certificate verification
- **Windows API**: For comprehensive system management operations
- **Winsock2**: For socket programming and network communication
- **DirectShow/GDI+**: For webcam control and image processing

The command structure follows a simple pattern:
```
!command [parameters]
```

With a structured response protocol that includes:
1. Size of any attachment (if present)
2. Binary attachment data (if present)
3. Size of the message response
4. Message content

One interesting technical challenge was implementing the webcam control functionality that captures frames in real-time:

```cpp
void WebcamController::WebcamThread() {
    // Initialize DirectShow objects
    // ...
    
    if (SUCCEEDED(hr)) {
        // Start capturing
        hr = pControl->Run();
        if (SUCCEEDED(hr)) {
            std::unique_lock<std::mutex> lock(mtx);
            while (!stopRequested) {
                // Grab frame
                long cbBuffer = bufferSize;
                if (SUCCEEDED(pGrabber->GetCurrentBuffer(&cbBuffer, (long*)buffer))) {
                    // Convert to JPEG using GDI+
                    // ...
                    
                    // Update currentFrame
                    {
                        std::lock_guard<std::mutex> frameLock(frameMutex);
                        currentFrame.resize(jpegSize);
                        void* ptr = GlobalLock(hg);
                        memcpy(currentFrame.data(), ptr, jpegSize);
                        GlobalUnlock(hg);
                    }
                }
                // Wait for next frame (approximately 30fps)
                cv.wait_for(lock, std::chrono::milliseconds(33));
            }
        }
    }
}
```

## Program Workflow

The typical flow of operations follows this sequence:

1. Remote user sends an email containing a command to the client's Gmail account
2. Client periodically checks Gmail for new commands using libcurl
3. When a new command email arrives, the client parses the command 
4. Client establishes a socket connection to the server (or uses existing connection)
5. Client sends the command to the server in the format `!command [parameters]`
6. Server executes the command with appropriate system permissions
7. Server sends back structured response with sizes and data
8. Client formats the response and sends it back to the remote user via email
9. For special commands like screenshots or webcam captures, binary attachments are included

## Command API Examples

The system supports numerous command types:

```
!help                  # List all available commands
!list p                # List all running processes
!list s                # List all Windows services
!screenshot            # Capture screen and return image
!webcam                # Toggle webcam on/off
!capture               # Capture frame from webcam
!shutdown [0/1/2]      # Shutdown/power off/restart
!list disks            # List available drives
!index [drive]         # Scan file system structure
!get file [path]       # Download specified file
!delete file [path]    # Delete specified file
!endp [process_id]     # Terminate a process
!ends [service_name]   # Stop a service
!starts [service_name] # Start a service
```

## Conclusion

The RemoteControl Via Email project demonstrates the flexibility of using alternative communication channels for system administration. By leveraging email as a transport medium, we've created a system that can operate effectively even in restricted network environments.

Future improvements could include:
- Adding end-to-end encryption for command payloads
- Extending platform support beyond Windows
- Implementing scheduled command execution
- Adding more advanced file operations and transfer capabilities

### Resources

The complete source code and documentation are available at:
- GitHub repository: [https://github.com/p1neapplechoco/RemoteControlViaEmail](https://github.com/p1neapplechoco/RemoteControlViaEmail)
- Demo video: [https://youtu.be/jOmx03PVJhc](https://youtu.be/jOmx03PVJhc)