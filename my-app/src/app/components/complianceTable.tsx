import React from 'react';

export default function ComplianceTable() {
    return (
        <>
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
                <tr>
                    <td>ISO xy.z</td>
                    <td>partially compliant</td>
                    <td>
                        {`Corpus_file_2 Section 4B violates ISO xy.z Article 16 `}
                        <span className="see-more-compliance">see more</span>
                    </td>
                </tr>
                <tr>
                    <td>ISO xy.z</td>
                    <td>partially compliant</td>
                    <td>
                        {`Corpus_file_2 Section 4B violates ISO xy.z Article 16 `}
                        <span className="see-more-compliance">see more</span>
                    </td>
                </tr>
                <tr>
                    <td>ISO xy.z</td>
                    <td>partially compliant</td>
                    <td>
                        {`Corpus_file_2 Section 4B violates ISO xy.z Article 16 `}
                        <span className="see-more-compliance">see more</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}