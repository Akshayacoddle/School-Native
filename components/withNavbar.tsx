import React from 'react';

const withConditionalNavItems = (WrappedComponent: any) => {
  return function ConditionalNavItems() {
    const role = 'admin';
    // const role = localStorage.getItem("role");
    const navItems =
      role === 'admin'
        ? {
            Exam: '/exam',
            'Upload Question': '/uploadquestion',
            'Generate Hall Ticket': '/hallticket',
          }
        : {
            Feedback: '/feedback',
            'View Hall Ticket': '/view',
            'Exam Timetable': '/timetable',
            Result: '/result',
          };
    return <WrappedComponent navItems={navItems} />;
  };
};

export default withConditionalNavItems;
