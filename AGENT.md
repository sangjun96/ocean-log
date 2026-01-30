# base rules
- Because of the limitations of LLMs, if up-to-date information that hasn’t been included in training is required, please request that the information be provided as context before starting the task.
- If the requirements are not clear, please ask for clarification in detail before starting the task.

# command rules
- use pnpm

# ui rules
- use tailwind css.
- Do not assign explicit color values directly to components. Instead, use CSS variables in the global CSS so that colors can be changed easily later.
- When structuring layouts, use Flexbox and Grid, and create dedicated layout components so they can be reused as much as possible.
- When designing layouts and UI, consider both mobile and desktop environments.
- Always support both dark mode and light mode, and prioritize text readability.
- If possible, use of shadcn ui components.
- When you need a shadcn UI component, do not create the component file manually—install it using the command pnpm dlx shadcn@latest add {component-name}.


# variable rules
- When using constants, do not leave them as magic numbers—add them as files under app/constants and use them from there.
- When using static text such as navigation labels or menu items, do not hardcode them directly in components—create files under app/text and use them from there.