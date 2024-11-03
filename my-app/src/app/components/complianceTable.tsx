import React, {useState} from 'react';
import ReasoningModal from './reasoningModal';

interface SelectedRow {
    "iso": string,
    "compliance": string,
    "reasoning": string,
}



export default function ComplianceTable({judgements}: any) {
    console.log(judgements)
    const[modalOpen, setModalOpen] = useState<boolean>(false);
    const[selectedRow, setSelectedRow] = useState<SelectedRow>({iso: "", compliance: "", reasoning: ""});
    // const[judgements, setJudgements] = useState();
    
    function seeMoreOnClick(iso: string, compliance: string, reasoning: string) {
        setModalOpen(true);
        setSelectedRow({"iso": iso, "compliance": compliance, "reasoning": reasoning});
    }

    function truncateReasoning(str: string) {
        return str.length > 55 ? str.substring(0, 55) + "..." : str;
    }

    if(judgements == null) {
        return (<div>loading...</div>)
    }
    // console.log(props.judgements.summary);
    else
    {
    return (
        <>
            {modalOpen ? <ReasoningModal complianceDetails={selectedRow} onClickProp={()=>setModalOpen(false)}/> : null}
            <h2>ISO Compliance Table</h2>
            <table id="compliance-table">
                <thead>
                    <tr>
                        <th>ISO</th>
                        <th>Compliance</th>
                        <th>Reasoning</th>
                        <th>{` `}</th>
                    </tr>
                </thead>
                <tbody>
                {/*dynamically render the rows from LLM API response*/}
                <tr className="tbody-rows">
                    <td>{judgements.sections}</td>
                    <td>{judgements.compliance}</td>
                    <td>
                        <span>{truncateReasoning(judgements.summary)}</span>
                        <span>{judgements.summary}</span>
                        <span className="see-more-compliance" 
                            onClick={()=>seeMoreOnClick("xy.z", "partially compliant", "Corpus_file_2 Section 4B violates ISO xy.z Article 16, It is stated that in order to")}>
                            see more
                        </span>
                    </td>
                </tr>
                <tr className="tbody-rows">
                    <td>ISO xy.z</td>
                    <td>partially compliant</td>
                    <td>
                        <span>{truncateReasoning(`Corpus_file_2 Section 4B violates ISO xy.z Article 16, it is stated that in order to`)}</span>
                        <span className="see-more-compliance" 
                            onClick={()=>seeMoreOnClick("xy.z", "partially compliant", "Corpus_file_2 Section 4B violates ISO xy.z Article 16, It is stated that in order to")}>
                            see more
                        </span>
                    </td>
                </tr>
                <tr className="tbody-rows">
                    <td>ISO xy.z</td>
                    <td>partially compliant</td>
                    <td>
                        <span>{truncateReasoning(`Corpus_file_2 Section 4B violates ISO xy.z Article 16, it is stated that in order to`)}</span>
                        <span className="see-more-compliance" 
                            onClick={()=>seeMoreOnClick("xy.z", "partially compliant", "Corpus_file_2 Section 4B violates ISO xy.z Article 16, It is stated that in order to")}>
                            see more
                        </span>
                    </td>
                </tr>
                <tr className="tbody-rows">
                    <td>ISO xy.z</td>
                    <td>partially compliant</td>
                    <td>
                        <span>{truncateReasoning(`Corpus_file_2 Section 4B violates ISO xy.z Article 16, it is stated that in order to`)}</span>
                        <span className="see-more-compliance" 
                            onClick={()=>seeMoreOnClick("xy.z", "partially compliant", "Corpus_file_2 Section 4B violates ISO xy.z Article 16, It is stated that in order to")}>
                            see more
                        </span>
                    </td>
                </tr>

                </tbody>
            </table>
        </>
    );
    }
}