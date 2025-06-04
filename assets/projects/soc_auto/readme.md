## Building a Mini SOC: Automating Incident Response with Wazuh, Shuffle, and TheHive

**Year**: *2025*

**Skills**: *Wazuh, TheHive, Shuffle, Sysmon, Elasticsearch, Cortex, VirtualBox, Ngrok, Linux Server Administration, Windows Event Logging, Threat Intelligence, API Integration, Automation Workflows, Incident Response, SOC Operations, Hash-based Threat Enrichment, Custom Detection Rules, Internal Networking, Security Orchestration, Case Management, SOAR, SIEM*

### Environment Setup (VirtualBox Network)
- Created an **internal VirtualBox network** to isolate the SOC components.
- Deployed multiple VMs within this internal network:
    - One **Relay VM** connected to both _Internal_ and _NAT_ adapters to provide internet access via **ngrok** tunnelling.
    - One VM dedicated to **Wazuh**.
    - One VM for **TheHive** and its dependencies (Elasticsearch, Cassandra, Java).
    - One **Windows VM** with Sysmon installed to simulate endpoint activity and attacks.

<img src="/portfolio/assets/projects/soc_auto/fig1.png" class="md-img" />

### Internet Bridging via Relay VM
- Used an **Alpine-based VM** as a **relay node**, configured with:
    - **ngrok** for secure tunnelling from the internal VBox network to the public internet.
    - Allowed Shuffle to reach out to external threat intelligence APIs for enrichment even from an isolated environment.

<img src="/portfolio/assets/projects/soc_auto/fig2.png" class="md-img" />

### Wazuh Installation and Configuration
- Installed and configured the **Wazuh manager** on a Linux server.
- Installed and configured the **Wazuh agent** on the Windows machine.
- Deployed **Sysmon** on the Windows VM with a custom configuration to generate detailed event logs.

<img src="/portfolio/assets/projects/soc_auto/fig3.png" class="md-img" />

### Custom Rule Creation in Wazuh
- Created a **custom detection rule** in Wazuh to trigger on a specific Sysmon event.
- The rule matched alerts based on the **`originalFileName`** attribute (e.g., `mimikatz.exe`) within Sysmon logs.
- Assigned a unique **`rule_id`** to this rule to identify and process it in later steps.

<img src="/portfolio/assets/projects/soc_auto/fig4.png" class="md-img" />
<img src="/portfolio/assets/projects/soc_auto/fig5.png" class="md-img" />

### Sending Alerts from Wazuh to Shuffle
- Configured Wazuh to **forward specific alerts** (based on the `rule_id`) to **Shuffle** via webhook or API.
- Ensured the alert payload included relevant fields like file hash, severity, timestamp, etc.

<img src="/portfolio/assets/projects/soc_auto/fig6.png" class="md-img" />

### Shuffle Workflow Automation
- In **Shuffle**, created a **workflow** to:
    - Extract IOCs (e.g., file hash) from the Wazuh alert.
    - Query **open-source threat intelligence databases** (Hybrid-Analysis) using the file hash for enrichment.
    - Analyze the reputation and criticality of the alert based on enrichment data.
    - If marked as **critical**, trigger an API request to create a case in **TheHive** with all enriched details.

<img src="/portfolio/assets/projects/soc_auto/fig7.png" class="md-img" />

### TheHive Case Management
- Installed **TheHive**, **Elasticsearch**, and necessary components.
- Verified that enriched alert data from Shuffle is being received and parsed properly.
- Configured **case templates** or default behavior in TheHive to handle incoming incidents.
- Analysts can log in to TheHive to view, investigate, and respond to enriched cases.

<img src="/portfolio/assets/projects/soc_auto/fig8.png" class="md-img" />

### Analyst Access and Monitoring
- Analysts can access:
    - **Wazuh Web UI** to review live alerts and rule matches.
    - **TheHive UI** to manage cases and track incident resolution.
- Full visibility over the SOC automation pipeline from detection to case handling.

<img src="/portfolio/assets/projects/soc_auto/fig9.png" class="md-img" />

***************************************
