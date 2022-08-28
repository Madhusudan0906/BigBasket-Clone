import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Login from "./Login";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.navdiv}>
      <div>
        <img
          src="images/bb.png"
          alt="error"
          width="80%"
          style={{ marginTop: "20px" }}
        />
      </div>
      <div className={styles.navdiv2}>
        <div>
          <p>
            <img
              src="/images/icons/phone.png"
              alt="phone"
              width="16"
              height="16"
            />{" "}
            1860 123 1000
          </p>
          <p>
            <img
              src="/images/icons/location.png"
              alt="location"
              width="16"
              height="16"
            />{" "}
            560004,Bangalore
          </p>
          <p onClick={onOpen} style={{ cursor: "pointer" }}>
            <img
              src="/images/icons/user.png"
              alt="user"
              width="16"
              height="16"
            />{" "}
            Login/Sign UP
          </p>
        </div>
        <br />
        <div className={styles.navdiv22}>
          <div>
            <form>
              <input type="search" placeholder="Search for products.." />
              <button
                style={{
                  backgroundColor: "#76EE00",
                  border: "none",
                  marginTop: "20px",
                  padding: "4px",
                }}
              >
                <img src="/images/icons/search.png" alt="search" width="100%" />
              </button>
            </form>
          </div>
          <Popover trigger="hover">
            <PopoverTrigger>
              <div className="cart">
                <img
                  src="/images/icons/basket.png"
                  alt="Basket"
                  width="30%"
                  height="50px"
                  style={{ marginTop: "10px" }}
                />
                <p>
                  My Basket
                  <br />0 items
                </p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>My Basket</PopoverHeader>
              <PopoverBody>my basket is empty right now!</PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
