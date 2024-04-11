import { useEffect, useCallback } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import eventsData from '../data/events.json'

const localizer = momentLocalizer(moment)

const Schedule = (props) => {

  const eventPropGetter = useCallback(
    (event) => ({
      ...(event.member && {
        className: event.member.toLowerCase(),
      }),
    }),
    []
  )

  const events = eventsData.events.map(obj =>
    obj = {
      start: new Date(obj.start),
      end: new Date(obj.start),
      title: obj.title,
      member: obj.member
    }
  )

  return (
    <Layout page='schedule'>
      <Head>
        <title>{siteTitle + ' || Schedule'}</title>
      </Head>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventPropGetter}
        views={['month', 'agenda']}
      />
    </Layout>
  )
}

export default Schedule
