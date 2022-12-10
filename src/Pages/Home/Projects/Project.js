import {
    Card,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Project({ project }) {
    const { image, name, live, client, server, details } = project;
    console.log(live);
    return (
        <Card className="bg-white bg-opacity-10 hover:bg-brown-700 hover:bg-opacity-10 duration-300">
            <img src={image} className="rounded-t-md" alt="" />
            <CardBody className="text-center">
                <Typography variant="h4" color="white" className="mb-2">
                    <span style={{ textShadow: "0 1px 2px #b36417" }} >{name}</span>
                </Typography>
                <Typography variant="h6" color="white" className="mb-2 text-left">
                    <span style={{ textShadow: "0 1px 2px #b36417" }} >{details}</span>
                </Typography>
                <div>
                    <a className="w-full" href={live} target="_blank" rel="noreferrer"><Button fullWidth variant="outlined" color="brown" className="text-white" ripple={false}>Live Link</Button></a>
                    <div className="flex gap-2 mt-2">
                        <a className="w-full" href={client} target="_blank" rel="noreferrer"><Button fullWidth variant="outlined" color="brown" className="text-white" ripple={false}>Client Side Code</Button></a>
                        <a className="w-full" href={server} target="_blank" rel="noreferrer"><Button fullWidth variant="outlined" color="brown" className="text-white" ripple={false}>Server Side Code</Button></a>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
