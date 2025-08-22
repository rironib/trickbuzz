"use client";

import { useEffect } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

export default function AdBlockDetector() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    function getCookie(name) {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
          return c.substring(name.length + 1);
        }
      }
      return null;
    }

    const b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

    b.onerror = () => {
      console.log("Ad-Blocker detected! 😒");
      window.adblock = true;

      const ck = getCookie("_dAB");

      if (ck == null) {
        // Show modal instead of manipulating DOM manually
        setTimeout(() => {
          onOpen(); // ✅ Open the modal
        }, 3000);
      }
    };

    b.onload = () => {
      console.log("No Ad-Blocker detected! 🤪");
    };

    const e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e);
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} placement="center"  backdrop="blur" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Ad Blocker Detected!!!
            </ModalHeader>
            <ModalBody>
              <p>
                Please disable your ad blocker to view this website properly.
              </p>
              <p>
                To support us, please consider whitelisting our site in your ad
                blocker.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Ok
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
