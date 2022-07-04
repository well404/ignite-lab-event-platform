import { Fragment } from "react";
import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonProps {
    variant: 'discord' | 'challenge';
    to?: string;
    text: string;
}

export function Button(props: ButtonProps) {

    return (
        <Fragment>

            {
                props.variant === 'discord'
                    ?
                    (
                        <a href={props.to} className="p-4 text-sm bg-green-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            {props.text}
                        </a>
                    )
                    :
                    (
                        <a href={props.to} className="p-4 text-sm text-blue-500 flex items-center justify-center rounded font-bold uppercase gap-2 border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            {props.text}
                        </a>
                    )
            }

        </Fragment>
    )
}