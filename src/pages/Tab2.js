import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

export default function Tab2 (){
    return (
        <Card raised={true} style={{ maxWidth: 400 }}>
            <CardHeader title="My Card" />
            <CardContent>
                <Typography variant="body1">
                    This is the content of my card.
                </Typography>
            </CardContent>
        </Card>
    )
}