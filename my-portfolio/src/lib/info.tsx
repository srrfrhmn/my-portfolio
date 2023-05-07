interface TermProp { 
    cd?: string;
}

export const Term = ({ cd = "~"}:TermProp) => {
    const commandPrompt = `(base) srrfrhmn@portfolio ${cd} %`;
    return <>{commandPrompt}</>;
};

export const FullName = () => {
    return (
        <>
            Sarraf Rahman
        </>
    )
}

export const ShortIntro = () => {
    return (
        <>
        Hello, I'm Sarraf. I'm a <b>software developer</b> and an <b>Honours Economics and Computer Science</b> student at <b> McMaster University</b>.
        </>
    )

}

export const LongIntro = () => {
    return (
        <>
        My  interest in emerging technologies drives me to contribute to open-source projects and engage with developer communities. In addition to my academic pursuits, I actively focus on building software solutions to real world issues.
        </>
    )

}
