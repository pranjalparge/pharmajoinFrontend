import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/Footer";
const Disclaimer = () => {
  const disclaimerSections = [
    {
      title: "General Information",
      content:
        "The information provided on Pharmajoin.in (“the Website”) is for general informational purposes only. While we strive to ensure the accuracy and reliability of the content presented on this Website, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Website.",
    },
    {
      title: "No Professional Advice",
      content:
        "The content on the Website is not intended to be a substitute for professional advice, including but not limited to medical, pharmaceutical, or career advice. Always seek the advice of qualified professionals with any questions you may have regarding a medical condition, pharmaceutical product, or career-related matter.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by law, Pharmajoin.in, its affiliates, partners, and employees shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, arising out of or in connection with your use of the Website or its content.",
    },
    {
      title: "External Links",
      content:
        "The Website may contain links to third-party websites that are not under the control of Pharmajoin.in. We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party sites.",
    },
    {
      title: "No Endorsement",
      content:
        "Inclusion of any third-party content, products, or services on the Website does not imply endorsement or recommendation by Pharmajoin.in.",
    },
    {
      title: "Changes to the Website",
      content:
        "Pharmajoin.in reserves the right to modify, update, or remove any part of the Website or its content at any time without prior notice.",
    },
    {
      title: "No Warranties",
      content:
        "The Website and its content are provided “as is” and “as available” without any warranties of any kind, either express or implied.",
    },
    {
      title: "User Responsibility",
      content:
        "You are solely responsible for your use of the Website and for any consequences that may arise from such use. You should exercise caution and discretion while using the Website.",
    },
    {
      title: "Governing Law",
      content:
        "This Disclaimer is governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.",
    },
    {
      title: "Changes to Disclaimer",
      content:
        "We may update this Disclaimer from time to time. Any changes will be posted on this page with the updated effective date.",
    },
    {
      title: "Contact Us",
      content: "If you have any questions or concerns about this Disclaimer, please contact us at pharmajoin9@gmail.com.",
    },
  ];

  return (
    <>
    <Nav/>
    <Navbar/>
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Disclaimer
      </Typography>
      <List>
        {disclaimerSections.map((section, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{ display: "block", marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
              {index + 1}. {section.title}
            </Typography>
            <ListItemText primary={section.content} />
          </ListItem>
        ))}
      </List>
    </Container>
   < Footer/>
    </>
  );
};

export default Disclaimer;
