export function slugify(str: string) {
    return String(str)
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

//MEET | Digital Culture Center, Viale Vittorio Veneto, 2, 20124 Milano MI, Italy

function isAppleDevice() {
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

function addAppleCalendar() {
    const event = {
        start: '20230222T000000',
        end: '20230310T235959',
        summary: 'Api, Glicini, Cemento',
        description: 'Otto dibattiti sulla biodiversità urbana visti attraverso il web',
        location: 'MEET | Digital Culture Center, Viale Vittorio Veneto, 2, 20124 Milano MI, Italy',
        url: 'https://example.com/event'
    };

    const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `DTSTART:${event.start}`,
        `DTEND:${event.end}`,
        `SUMMARY:${event.summary}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.location}`,
        `URL:${event.url}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'event.ics'; // You can name the file as you like
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function addGoogleCalendar() {
    const event = {
        start: '20230222T000000',
        end: '20230310T235959',
        summary: 'Api, Glicini, Cemento',
        description: 'Otto dibattiti sulla biodiversità urbana visti attraverso il web',
        location: 'MEET | Digital Culture Center, Viale Vittorio Veneto, 2, 20124 Milano MI, Italy'
    };

    // Format start and end dates for Google Calendar (YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS)
    const formattedStart = `${event.start.substring(0, 4)}${event.start.substring(4, 6)}${event.start.substring(6, 8)}T${event.start.substring(8, 14)}`;
    const formattedEnd = `${event.end.substring(0, 4)}${event.end.substring(4, 6)}${event.end.substring(6, 8)}T${event.end.substring(8, 14)}`;

    // Construct the Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.summary)}&dates=${formattedStart}/${formattedEnd}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

    // Open the URL in a new tab
    window.open(googleCalendarUrl, '_blank');
}


export function addToCalendar() {
    if (isAppleDevice()) {
        addAppleCalendar();
    } else {
        addGoogleCalendar();
    }
}