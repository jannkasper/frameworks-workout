import {Div} from "./containers";
import {Blockquote, P, Hr} from "./text";
import {A} from "./anchor";
import {Img} from "./media";
import {Code, Pre} from "./code";
import {Li, Ol, Ul} from "./lists";
import { Table, Th, Td } from "./table";
import { H1, H2, H3, H4, H5, H6} from "./headlings";
import { Mention, Hashtag, Cashtag, Emoji, Poll } from "./twitter";
import Tweet  from "./tweet/tweet"
import EmbeddedTweet from "./embedded-tweet";



export default {
    div: Div,

    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,

    p: P,
    blockquote: Blockquote,
    hr: Hr,

    code: Code,
    pre: Pre,

    a: A,

    ul: Ul,
    ol: Ol,
    li: Li,

    table: Table,
    th: Th,
    td: Td,


    img: Img,

    Mention,
    Hashtag,
    Cashtag,
    Emoji,
    Poll,

    Tweet,
    EmbeddedTweet,
}
