const Style = () => {
    const style = `\
    .bg-1 {\
background: #164863;}\
.bg-2 {\
background: #427d9d;}\
.bg-3 {\
background: #9bbec8;}\
.bg-4 {\
background: #ddf2f2;}\
.text-1 {\
color: #164863;}\
.text-2 {\
color: #427d9d;}\
.text-3 {\
color: #9bbec8;}\
.text-4 {\
color: #ddf2f2;}\
`
    return ( <>
    <style>{style}
      </style>
    </> );
}
 
export default Style;