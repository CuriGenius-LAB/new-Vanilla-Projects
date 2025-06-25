
export const actionHandlers = {

    sticky: ({element , triggerAt , scrollY}) => {

        element?.classList.toggle("sticky" , scrollY >= triggerAt)

    }
}