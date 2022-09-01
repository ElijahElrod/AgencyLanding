import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function ContactButton() {

    const router = useRouter();

    const redirectToContact = () => {
        
        router.push('/contact')
    }

    return (
        <Button auto color={"gradient"} onClick={redirectToContact}>
            Schedule A Call
        </Button>
    )
}