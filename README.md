<Index>
<BrowserRouter>
    <App>
    <Layout>
      <MainNavigation>
        <Link>All Recipes</Link>
        <Link>Quick Recipes</Link>
        <Link>Add New Recipe</Link>
        <SearchBar></SearchBar>
      </MainNavigation>
      <Switch>
        <Route>
          <AllRecipesPage>
            <RecipeItem>
                <Card>
                    <Props>
                </Card>
            </RecipeItem>
          </AllRecipesPage>
        </Route>
        <Route>
          <FullRecipe>
          </FullRecipe>
        </Route>
        <Route>
          <QuickRecipesPage>
          </QuickRecipesPage>
        </Route>
        <Route>
          <NewRecipePage>
            <NewRecipeForm>
                <FormCard>
                    <IngredientForm>
                    <IngredientForm>
                </FormCard>
            </NewRecipeForm>
          </NewRecipePage>
        </Route>
      </Switch>
    </Layout>
    </App>
</BrowserRouter>

<RecipeContext.Provider>

#TO DO
design and render the full recipe page

#FORM
add new recipe at top
list of existing recipes in large font below

- control who can edit the form
  create full page recipe template
  input field name transitions to outline
  ingredient already exists ? populate : add

...
...
...

structure inputs into an array
loop through ingredients(array)
generate n ingredient forms
autofill ingredient name
change onSubmission action

step one to step six form

figure out why image has a gap
adjust gap between card and nav
add padding to 1200px container
clean up recipe card component

quick recipe functionality
search bar functionality

#SPITBALLING
ingredients as an array separated by commas
for each element, check if it exists in ingredients
if not? push to new array
for each element, new page which renders a JSX ingredients form
dynamic input field heading for each element
on submit, banner appears saying ingredient added
form input field disappears
