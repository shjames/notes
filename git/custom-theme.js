// custom-theme.js
export default {
    colors: {
        background: "#000",
        text: "#F08D45",
        primary: "#a66"
    },
    styles: {
        CodeSurfer: {
            pre: {
                color: "text",
                // background: `url(${backgroundUrl}) no-repeat`,
                // backgroundSize: "100%,auto",
                backgroundColor: "background",
            },
            code: {
                color: "text",
                backgroundColor: "background"
            },
            tokens: {
                "comment cdata doctype": {
                    fontStyle: "italic"
                },
                "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted": {
                    color: "primary"
                },
                "line-number": {
                    opacity: 0.8
                }
            },
            title: {
                backgroundColor: "background",
                color: "text"
            },
            subtitle: {
                color: "#d6deeb",
                backgroundColor: "rgba(10,10,10,0.9)"
            },
            unfocused: {
                // only the opacity of unfocused code can be changed
                opacity: 0.1
            }
        }
    }
};