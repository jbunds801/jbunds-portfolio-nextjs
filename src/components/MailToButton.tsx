interface MailToButtonProps {
    email: string;
    label: string;
    subject?: string;
    body?: string;
    className?: string;
}

const MailToButton = ({
    email,
    label,
    subject,
    className,
}: MailToButtonProps) => {
    const params = new URLSearchParams();

    if (subject) {
        params.set("subject", subject);
    }

    const queryString = params.toString();
    const mailtoHref = `mailto:${email}${queryString ? `?${queryString}` : ""}`;

    return (
        <a href={mailtoHref} className={className}>
            {label}
        </a>
    );
};

export default MailToButton;