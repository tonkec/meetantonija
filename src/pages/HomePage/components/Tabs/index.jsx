import './Tabs.scss'
import { useState } from 'react'
import hobbyProjects from 'data/hobby'

const getTabItems = () => {
  return hobbyProjects.map((hobby) => {
    return {
      title: hobby.title,
      content: (
        <div className="flex flex-responsive flex-gap">
          {hobby.projects.map((project, index) => (
            <div
              className="flex-1 bg-pink max-w-50 small-padding border-radius"
              key={index}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a
                href={`/hobby/${project.route}`}
                className="small-margin-top ternary inline-block"
                role="button"
              >
                {' '}
                Read more
              </a>
            </div>
          ))}
        </div>
      ),
    }
  })
}

const Tab = ({ content }) => {
  return (
    <div className="tab-content small-margin-top small-padding">
      <div className="container">{content}</div>
    </div>
  )
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabItems = getTabItems()
  return (
    <>
      <div className="container">
        <div className="flex flex-gap-small">
          {tabItems.map((tab, index) => (
            <div key={index} className="tab">
              <input
                type="radio"
                id={`tab-${index}`}
                name="tab"
                defaultChecked={index === 0}
                onChange={() => {
                  setActiveTab(index)
                }}
                className="hidden"
              />
              <label
                role="button"
                className={`pointer ${
                  activeTab === index ? 'secondary' : 'ternary'
                }`}
                htmlFor={`tab-${index}`}
              >
                {tab.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-x-center medium-margin-top">
        <Tab content={tabItems[activeTab].content} />
      </div>
    </>
  )
}

export default Tabs
