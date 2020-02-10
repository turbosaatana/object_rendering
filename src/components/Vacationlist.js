import React from 'react';

function Vacationlist(props) {
    return (
        <div>{
            props.vacations.map(vacation => {
                return (
                    <p key={ vacation.id }>
                        Name: { vacation.name }<br />
                        Starts: { vacation.startingday } <br />
                        Ends: { vacation.endingday }
                    </p>
                );
            })
        }
        </div>
    )
}

export default Vacationlist;