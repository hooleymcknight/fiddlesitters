import BioStats from './layouts/BioStats'
import TopSummary from './layouts/TopSummary'
import TableOfContents from './layouts/TableOfContents'
import Sections from './layouts/Sections'

import data from '../../data/member_data.json'

const CrewMember = ({ member }) => {
  const memberData = data[member]

  return (
    <div className="wiki-layout">
      <BioStats data={memberData['bio_panel']} />
      <TopSummary member={member} data={memberData['summary']} />
      <TableOfContents data={memberData['sections']} />
      <Sections data={memberData['sections']} />
    </div>
  )
}

export default CrewMember