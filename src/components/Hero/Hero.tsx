import React from 'react'
import Typical from 'react-typical'
import { Linkedin, Github, Mail, ArrowDownToLine } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Container } from '../Project/styles'

const Hero = () => {
    return (
        <Container className="flex items-center">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="col-span-1 md:col-span-5 md:flex justify-center items-center">
                        <img
                            src="./src/assets/images/avatar.png"
                            alt="Avatar"
                            className="w-3/4 md:w-3/4 rounded-full"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-7 md:flex flex-col justify-center">
                        <h2 className="text-primary text-center font-bold pb-2 text-4xl">
                            Wallison Costa
                        </h2>
                        <div className="pl-8 md:pl-0 min-h-32 text-center text-2xl">
                            <Typical
                                steps={[
                                    // eslint-disable-next-line quotes
                                    "I'm a Software Engineer",
                                    1000,
                                    // eslint-disable-next-line quotes
                                    "I'm a Full Stack Developer!",
                                    500,
                                    '',
                                    500,
                                ]}
                                loop={Infinity}
                                wrapper="h1"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center pb-2">
                            <Button className="bg-blue-600 hover:bg-blue-500 flex items-center gap-1 p-5">
                                <ArrowDownToLine />
                                <a
                                    href="https://drive.usercontent.google.com/u/0/uc?id=1iDY0RGvkb69p0nU-URLHdLG4Rqy3RuZe&export=download"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </a>
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-500 flex items-center gap-1 p-5">
                                <Mail />
                                <a href="#contacts">Contact me</a>
                            </Button>
                        </div>
                        <div className="flex justify-center pt-6">
                            <a
                                href="https://github.com/Wallison-DEV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-4"
                            >
                                <Github color="blue" size={32} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/wallison-python-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin color="blue" size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero
