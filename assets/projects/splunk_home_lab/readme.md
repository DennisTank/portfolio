## Endpoint Attack Detection and Analysis Using Splunk and Sysmon in a Virtual Lab

**Year**: *2025

**Skills**: *Virtualization, Network Configuration, Splunk, Sysmon, SIEM, Incident Response, Windows Security, Linux Security, Penetration Testing, Nmap, Metasploit, Reverse Shell, Malware Analysis, Command-Line Interface (CLI), Network Forensics, Log Analysis, Threat Hunting, SPL (Search Processing Language), Cybersecurity Monitoring, Internal Network Setup, Vulnerability Exploitation, Defensive Security, Attack Simulation*

## Lab Environment
- **Hypervisor**: VirtualBox.
- **Attack Machine**: Kali Linux.
- **Target Machine**: Windows 10.
- **SEIM**: Splunk, ...

## Procedure
- Downloading and installing  the lab components; VirtualBox as hypervisor and in it two OS instances of Kali Linux and Windows 10.

<img src="/portfolio/assets/projects/splunk_home_lab/fig1.png" class="md-img" />

- Configure both the Virtual Machines to `Internal Network` and assign them the same network interface name. 

<img src="/portfolio/assets/projects/splunk_home_lab/fig2.png" class="md-img" />

- Configure the Internal Network IPv4 for Kali (192.168.100.1) and Windows (192.168.100.2).

<img src="/portfolio/assets/projects/splunk_home_lab/fig3.png" class="md-img" />

- Install and configure Splunk, SYSMON service, and SYSMON-add-on for Splunk.

<img src="/portfolio/assets/projects/splunk_home_lab/fig4.png" class="md-img" />

- In the Kali VM run the Nmap scan on the target IP to search for open ports. I have keep the RDP Port 3389 open for the attack an Analysis purpose.

<img src="/portfolio/assets/projects/splunk_home_lab/fig5.png" class="md-img" />

- Create the meterpreter-reverse-tcp malware (resume.pdf.exe) with the Metasploit venom. This malware will exploit windows and the open RDP port will be our socket point for the reverse shell. Set the LHOST as the Kali IP and any available port of chose.

<img src="/portfolio/assets/projects/splunk_home_lab/fig6.png" class="md-img" />

- In the Windows machine, turn off the real-time protection.
- Download the malware file into the Windows machine.

<img src="/portfolio/assets/projects/splunk_home_lab/fig7.png" class="md-img" />

- In Metasploit console in Kali, use multi/handler exploit and set the payload as windows/x64/meterpreter/reverse_tcp. Set the LHOST and LPORT as same as the malware file.
- Run the resume.pdf.exe in the Windows and allow the RUN.
- In the Kali, the meterpreter reverse tcp connection will be estabilised successfully.

<img src="/portfolio/assets/projects/splunk_home_lab/fig8.png" class="md-img" />

- Get the victims shell and run few commands to create few event-record in the windows.

<img src="/portfolio/assets/projects/splunk_home_lab/fig9.png" class="md-img" />

- In the Windows machine all the captured telemetry data can be analysed though Splunk and SYSMON-add-on. Configure Splunk to have a index=endpoint i.e., the collection of events/logs related to endpoints like workstations, servers, etc.

<img src="/portfolio/assets/projects/splunk_home_lab/fig10.png" class="md-img" />

- Now by filtering any suspected event and analysing further it can be inferred that their are some shell command execution though an outside IP address.

<img src="/portfolio/assets/projects/splunk_home_lab/fig11.png" class="md-img" />

- By applying more filters using Splunk Search Processing Language (SPL) syntaxs. We can filter out the critical data points for e.g. in the Statistics TAB it can be seen which shell command has been executed and though which shell-type i.e. cmd.exe in this case.

<img src="/portfolio/assets/projects/splunk_home_lab/fig12.png" class="md-img" />

******************************