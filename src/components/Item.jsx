import { Card, Stack, CardBody, CardFooter, Heading, Text, Divider, Button, ButtonGroup, Image } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const Item = ({ title, price, category, image , description}) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={image}
                    alt={title}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text fontSize='small'>
                        {description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {price}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                       {category}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item