import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { main } from "./styles";

export const MagicLinkEmail = ({
  signInLink,
  sentTo,
}: {
  signInLink: string;
  sentTo: string;
}) => (
  <Html>
    <Head />
    <Preview>Here is your one-time password for login</Preview>
    <Tailwind>
      <Body style={main} className="py-8 text-[#1a1a1a]">
        <Container>
          <Section>
            <Row className="">
              <Column width={"24"} className="pr-2">
                <Img
                  src={`https://imagedelivery.net/PWe9rlYiKWdV4Gf-JnsgCw/faf4d104-cb3a-4669-e1f2-4b58f286fa00/2k`}
                  width="24"
                  height="24"
                  className="rounded-sm"
                  alt="Logo"
                />
              </Column>
              <Column className="w-fit">
                <Text className="font-semibold tracking-tight">
                  boilerbase.io
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
        <Container className="mx-auto">
          <Section className="">
            <Text className={"text-lg text-[#1a1a1a] font-semibold"}>
              Your one-time login link
            </Text>

            <Link
              href={signInLink}
              className="text-base text-right text-white bg-[#1a1a1a] px-6 py-3 rounded font-medium"
            >
              Login
            </Link>

            <Text>
              {
                "This code will expire within 24 hours. If you have not requested this code, kindly contact support promptly at the following email address: support@brndndiaz.dev."
              }
            </Text>
            <Text>— boilerbase.io</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default MagicLinkEmail;
