"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "~/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./NavigationMenu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";
import { Button, buttonVariants } from "./Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

export default function Header() {
  return (
    <header className="mb-6 flex items-center justify-between border-b pb-2 pt-5 transition duration-300 ease-out">
      <a className="w-[220px]" href="/">
        <span className="pb-1 font-mono font-bold">d6stiny.lol</span>
      </a>

      <nav className="hidden w-full justify-end sm:flex">
        <ul className="flex items-center gap-8">
          <div className="flex flex-grow gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>EPM</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-4">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="https://epmontijo.edu.pt/"
                            target="_blank"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              EPM
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Escola que frequentei desde o 10º ano até ao 12º.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/epm/notes" title="Notas">
                        Notas que tirei de tópicos técnicos abordados na escola.
                      </ListItem>
                      <ListItem href="/epm/ref" title="TGPSI Ref">
                        Referêncial do curso que frequentei (TGPSI).
                      </ListItem>
                      <ListItem href="/epm/internship" title="Estágio">
                        Plano de estágio + O meu relatório de estágio.
                      </ListItem>
                      <ListItem href="/epm/pap" title="PAP">
                        A minha prova de aptidão profissional (PAP).
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </ul>
      </nav>

      <MobileHeader />
    </header>
  );
}

export function MobileHeader() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="nav:hidden block p-2 hover:bg-transparent sm:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <Link
              className={buttonVariants({
                variant: "link",
                className: "-mx-2 -mt-2 w-fit !p-2",
              })}
              href={"/"}
              onClick={() => setIsOpen(!isOpen)}
            >
              d6stiny.lol
            </Link>
          </SheetTitle>
          <SheetDescription className="flex flex-col divide-y text-start">
            {/* <Link
              href="#"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 py-4 text-foreground/60 transition-colors hover:text-foreground/80"
            >
              yes
            </Link> */}

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>EPM</AccordionTrigger>
                <AccordionContent onClick={() => setIsOpen(!isOpen)}>
                  <div className="flex flex-col gap-2">
                    <Link className="py-4" href="/epm/notes">
                      Notas
                    </Link>
                    <Link className="py-4" href="/epm/ref">
                      TGPSI Ref
                    </Link>
                    <Link className="py-4" href="/epm/internship">
                      Estágio
                    </Link>
                    <Link className="py-4" href="/epm/pap">
                      PAP
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
