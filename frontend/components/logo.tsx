import { Wallet2 } from "lucide-react";


type Props = {
    role: 'customer' | 'merchant';
};
const Logo = ({role}: Props) => {
    return (
        <h1 className="text-center logo text-2xl flex justify-center gap-2 font-bold items-center">
            <Wallet2 size={28} color={role === 'customer' ? 'cyan' : 'purple'} /> {
                role === 'customer' ? 'Customer Portal' : 'PayHabib'
            }
        </h1>
    );
};

export default Logo;