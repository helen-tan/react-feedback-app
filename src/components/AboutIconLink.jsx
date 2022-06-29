import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>

    // We shouldn't wrap the FaQuestion in a <a> tag as it would make the page refresh
    // Its fine if we are linking off-site
    // But for any internal links, we should use <Link>
  )
}

export default AboutIconLink
