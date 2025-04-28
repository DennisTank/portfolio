# Building a Secure Cloud: Setting Up, Attacking and Defending OpenStack from Scratch.


**Year**: *2024*

**Skills**: *OpenStack, Ubuntu, VirtualBox, Networking, Snort, Tshark, Scapy, Go, Python, Nmap, Hping3, Network Security, Cloud Architecture, Intrusion Detection, Packet Analysis, Manual Installation, Linux Server Management, Virtualization*

## Environment Setup 🛠️
The project started with the following hardware specifications:
- **CPU:** Intel Core i9-13900HX @ 2.20 GHz
- **RAM:** 16 GB
- **Storage:** 1TB PCIe NVMe SSD

The objective was to install OpenStack manually to allow greater customization and better control over the environment.  
Three approaches were tested — **MicroStack**, **DevStack**, and a **full manual installation**.
### Why Manual Installation? 🤔
MicroStack and DevStack provided simplified setups but introduced limitations and instability.  
Manual installation allowed deeper control over networking, services, and storage configurations, making it ideal for fine-tuning the system.

## OpenStack Architecture 🏗️
**VirtualBox** was used to simulate a multi-node OpenStack environment, structured as follows:
- **Controller Node:** Manages identity (Keystone), image services (Glance), dashboard (Horizon), and orchestration
- **Compute Node:** Handles the lifecycle of virtual machines (Nova)
- **Block Node:** Manages block storage volumes (Cinder)

<img src="/portfolio/assets/projects/openstack/fig1.png" class="md-img" />

**Network Design:**
- **Management Network (10.0.0.0/24):** Internal communication between OpenStack services
- **Provider Network (203.0.113.0/24):** Internet access for VMs
- **Private Network (192.168.100.0/24):** VM-to-VM communication isolated from the internet

<img src="/portfolio/assets/projects/openstack/fig2.png" class="md-img" />

A **virtual router** bridged internal and external networks, ensuring full traffic flow between instances and outside networks. 🌐

**Host OS:** Ubuntu Server 16.04 LTS

<img src="/portfolio/assets/projects/openstack/fig3.png" class="md-img" />

## Launching Instances 🚀
Two virtual machines were launched within the OpenStack environment:
- **Attacker Instance:** 2 vCPUs, 512MB RAM, 5GB Disk
- **Detector Instance:** 6 vCPUs, 2GB RAM, 10GB Disk

Both instances were connected to the **private network** (192.168.100.0/24).  
This setup simulated a typical internal network where attack simulations and detection mechanisms could be tested. 🎯

<img src="/portfolio/assets/projects/openstack/fig4.png" class="md-img" />

## Simulating Attacks and Defences 🥷🛡️
**Alpine Linux** was selected due to its lightweight footprint. However, due to limited package support (especially for tools like **Snort**), the decision was made to switch to **Ubuntu** for both instances.

### On the Attacker Instance:
- **Hping3** (Advanced packet generation 🚀)
### On the Detector Instance:
- **Snort** (Real-time intrusion detection 🔥)
- **Tshark** (Deep packet inspection and analysis)
- **Python HTTP server** (For hosting small test applications)

### SYN Flood (DoS Attack)
 **Command:** 
- `hping3 -S -p 80 --flood 192.168.100.9`

<img src="/portfolio/assets/projects/openstack/fig5.png" class="md-img" />

**Snort Detection Rule:** 
- `alert tcp any any -> $HOME_NET 80 (msg:"SYN FLOOD"; detection_filter: track by_dst, count 20, seconds 60; sid:10000009; rev:2;)`

<img src="/portfolio/assets/projects/openstack/fig6.png" class="md-img" />

### UDP Flood (DoS Attack)
 **Command:** 
- `hping3 --udp -p 80 --flood 192.168.100.9`

<img src="/portfolio/assets/projects/openstack/fig7.png" class="md-img" />

**Snort Detection Rule:** 
- `alert udp any any -> $HOME_NET 53 (msg:"UDP FLOOD"; detection_filter: track by_src, count 10, seconds 60; sid:10000007; rev:3;)`

<img src="/portfolio/assets/projects/openstack/fig8.png" class="md-img" />

### SYN Flood (DoS Attack)
 **Command:** 
- `hping3 -2 -p 53 192.168.100.9`

<img src="/portfolio/assets/projects/openstack/fig9.png" class="md-img" />

**Snort Detection Rule:** 
- `alert udp $EXTERNAL_NET any -> $HOME_NET 53 (msg:"UDP SCAN DETECT"; detection_filter: track by_dst, count 20, seconds 60; classtype: attempted-recon; sid:10000006; rev:2;)`

<img src="/portfolio/assets/projects/openstack/fig10.png" class="md-img" />

************************************