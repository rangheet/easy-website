
const dateOptions = { /*day: 'numeric',*/ month: 'long', year: 'numeric'  };

export function formatDate(dateString)
{
    if(dateString == "")
        return "Till Date";
    return new Date(Number(dateString)).toLocaleDateString("en-US", dateOptions);
}