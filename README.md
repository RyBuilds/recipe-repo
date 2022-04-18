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
<RecipeContext.Consumer>

#TO DO

global context which gets slug
design and render the full recipe

add ingredients text area
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
